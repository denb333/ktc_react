import React, { useState } from 'react'
import styles from './Button.module.css'

type AccItem = {
  id: string;
  label: string;
  content: string;
};

const DATA: AccItem[] = [
  {
    id: 'history',
    label: 'HISTORY',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
  },
  {
    id: 'approach',
    label: 'APPROACH',
    content:
      'Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
  },
  {
    id: 'culture',
    label: 'CULTURE',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.',
  },
  {
    id: 'method',
    label: 'METHOD',
    content:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
  },
];


export default function SingleAccordions() {
  const [openId, setOpenId] = useState<string | null>(null);

  /** click 1 tab ⇒ đóng hết, chỉ mở tab đó */
  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className={styles.accWrapper}>
      {DATA.map((it) => (
        <div key={it.id} className={styles.accItem}>
          <button
            className={`${styles.accBtn} ${openId === it.id ? styles.isOpen : ''}`}
            onClick={() => toggle(it.id)}
          >
            {it.label}
          </button>

          {openId === it.id && (
            <div className={styles.accContent}>{it.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
