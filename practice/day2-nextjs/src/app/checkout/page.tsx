"use client"
import { useState } from "react"
export default function CheckoutPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        paymentMethod: "cod",one: "",
    })
    return (
        <div className="max-w-4xl mx-auto py-6 px-4 border-2 border-gray-300 rounded-lg mt-4">
            <h1 className="text-2xl font-bold mb-4">Thanh toán</h1>
        </div>
    )
}