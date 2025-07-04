import React from 'react'
import styles from './Card.module.css'


type Divice = {
    id: number
    salePercent?: number;
    img?: string;
    title?: string;
    price?: number;
    salePrice?: number;

}

type CardProps = { device: Divice }
// type DiviceProps = { device: Divice }

export default function index({ device }: CardProps) {
    return (
        <div className={styles.container}>


            <div className={styles.card}>
                <div className={styles.imgCardDevice}>
                    <div > {device.salePercent && <span className={styles.salePercent}>{device.salePercent} %</span>}</div>
                    <img src={device.img} alt="" />
                </div>
                <div className={styles.cardContent}>
                    {device.title}
                </div>
                <div className={styles.priceView}>
                    <div className={styles.Price}>{device.price}</div>
                    <div className={styles.salePrice}>{device.salePrice} </div>
                </div>
            </div>

        </div>
    )
}