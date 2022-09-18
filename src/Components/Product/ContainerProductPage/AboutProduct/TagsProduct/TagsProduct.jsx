import React from 'react';
import style from './TagsProduct.module.css'
const TagsProduct = ({ valueProduct }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.skuBox}>
                <span className={style.sku}>SKU:</span>
                <span className={style.skuName}>FW511</span>
            </div>
            <div className={style.categoryBox}>
                <span className={style.category}>CATEGORY:</span>
                <span className={style.categoryName}>{valueProduct.categories.toUpperCase()},</span>
                <span className={style.categoryName}> LIFE STYLE</span>
            </div>
            <div className={style.tagsBox}>
                <span className={style.tags}>TAGS:</span>
                <span className={style.tagsName}>DESIGNER,</span>
                <span className={style.tagsName}> {valueProduct.sex.toUpperCase()}</span>
            </div>
        </div>
    );
};

export default TagsProduct;