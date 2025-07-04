import React from 'react'
import styles from './Card.module.css'

type Product = {
    id: number
    img?: string;
    title?: string;
    view?: number
}

type CardProps = { product: Product}
// type DiviceProps = { device: Divice }

export default function index({ product}: CardProps) {
    return (
        <div className={styles.container}>

            <div className={styles.card}>
                <div className={styles.imgCard}>
                    <img src={product.img} alt="" />
                </div>
                <div className={styles.cardContent}>
                    {product.title}
                </div>
                <div className={styles.cardView}>{product.view} view</div>
            </div>
           

        </div>
    )
}