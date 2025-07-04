(function () {
        /* ================= CLOCK & GREETING ================= */
        const clockEl = document.getElementById("clock");
        const greetingEl = document.getElementById("greeting");

        function updateClock() {
          const now = new Date();
          clockEl.textContent = now.toLocaleTimeString("vi-VN");
          const hour = now.getHours();
          let greet = "";
          if (hour < 12) greet = "Chào buổi sáng ☀️";
          else if (hour < 18) greet = "Chào buổi chiều 🌤️";
          else greet = "Chào buổi tối 🌙";
          greetingEl.textContent = greet;
        }
        updateClock();
        setInterval(updateClock, 1000);

        /* ================= THEME SWITCHER ================= */
        const themeBtn = document.getElementById("theme-toggle");
        const body = document.body;
        const storedTheme = localStorage.getItem("dash-theme");
        if (storedTheme === "dark") {
          body.classList.add("dark-theme");
          themeBtn.textContent = "☀️";
        }

        themeBtn.addEventListener("click", () => {
          body.classList.toggle("dark-theme");
          const isDark = body.classList.contains("dark-theme");
          themeBtn.textContent = isDark ? "☀️" : "🌙";
          localStorage.setItem("dash-theme", isDark ? "dark" : "light");
        });

        /* ================= UTILITIES ================= */
        const NOTE_COLORS = getComputedStyle(document.documentElement)
          .getPropertyValue("--note-colors")
          .split(",")
          .map((c) => c.trim());

        function randomColor() {
          return NOTE_COLORS[Math.floor(Math.random() * NOTE_COLORS.length)];
        }

        /* ================= LOCAL STORAGE HELPERS ================= */
        function save(key, value) {
          localStorage.setItem(key, JSON.stringify(value));
        }
        function load(key, defaultVal) {
          const raw = localStorage.getItem(key);
          try {
            return raw ? JSON.parse(raw) : defaultVal;
          } catch {
            return defaultVal;
          }
        }

        /* ================= TO‑DO LIST ================= */
        const todoInput = document.getElementById("todo-input");
        const addTodoBtn = document.getElementById("add-todo");
        const todoError = document.getElementById("todo-error");
        const todoList = document.getElementById("todo-list");
        const filterBtns = document.querySelectorAll("#filters button");

        let todos = load("todos", []);
        let currentFilter = "all";

        function renderTodos() {
          todoList.innerHTML = "";
          let filtered = todos;
          if (currentFilter === "completed")
            filtered = todos.filter((t) => t.done);
          else if (currentFilter === "incomplete")
            filtered = todos.filter((t) => !t.done);

          filtered.forEach((todo) => {
            const li = document.createElement("li");
            li.className = "task" + (todo.done ? " completed" : "");

            const left = document.createElement("div");
            left.className = "task-left";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = todo.done;
            checkbox.addEventListener("change", () => {
              todo.done = checkbox.checked;
              save("todos", todos);
              renderTodos();
            });

            const span = document.createElement("span");
            span.className = "task-text";
            span.textContent = todo.text;

            left.appendChild(checkbox);
            left.appendChild(span);

            const del = document.createElement("button");
            del.className = "delete-btn";
            del.textContent = "×";
            del.addEventListener("click", () => {
              todos = todos.filter((t) => t.id !== todo.id);
              save("todos", todos);
              renderTodos();
            });

            li.appendChild(left);
            li.appendChild(del);
            todoList.appendChild(li);
          });
        }

        function addTodo() {
          const text = todoInput.value.trim();
          if (!text) {
            todoError.textContent = "Vui lòng nhập nội dung!";
            return;
          }
          todoError.textContent = "";
          const newTodo = {
            id: Date.now(),
            text,
            done: false,
          };
          todos.push(newTodo);
          save("todos", todos);
          todoInput.value = "";
          renderTodos();
        }

        addTodoBtn.addEventListener("click", addTodo);
        todoInput.addEventListener("keydown", (e) => {
          if (e.key === "Enter") addTodo();
        });

        filterBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
            filterBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.dataset.filter;
            renderTodos();
          });
        });

        /* ================= NOTES ================= */
        const noteInput = document.getElementById("note-input");
        const addNoteBtn = document.getElementById("add-note");
        const noteError = document.getElementById("note-error");
        const notesContainer = document.getElementById("notes-container");

        let notes = load("notes", []);

        function renderNotes() {
          notesContainer.innerHTML = "";
          notes.forEach((note) => {
            const div = document.createElement("div");
            div.className = "note";
            div.style.background = note.color;
            div.textContent = note.text;

            const del = document.createElement("button");
            del.className = "delete-btn";
            del.textContent = "×";
            del.addEventListener("click", () => {
              notes = notes.filter((n) => n.id !== note.id);
              save("notes", notes);
              renderNotes();
            });

            div.appendChild(del);
            notesContainer.appendChild(div);
          });
        }

        function addNote() {
          const text = noteInput.value.trim();
          if (!text) {
            noteError.textContent = "Vui lòng nhập nội dung!";
            return;
          }
          noteError.textContent = "";
          const newNote = {
            id: Date.now(),
            text,
            color: randomColor(),
          };
          notes.push(newNote);
          save("notes", notes);
          noteInput.value = "";
          renderNotes();
        }

        addNoteBtn.addEventListener("click", addNote);
        noteInput.addEventListener("keydown", (e) => {
          if (e.key === "Enter") addNote();
        });

        /* ================= INIT ================= */
        renderTodos();
        renderNotes();
      })();