import React from 'react';
import styles from './ShoppingCart.module.css';
import { FiShoppingCart } from 'react-icons/fi';

interface Props {

}

interface State {
    isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            isOpen: false,
        };
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e.target); // 描述的是事件发生的元素
        console.log(e.currentTarget); // 描述的是事件发生绑定的元素
        console.log((e.target as HTMLElement).nodeName)

        // 实现只点击文字响应事件
        if ((e.target as HTMLElement).nodeName === 'SPAN') {
            this.setState({ isOpen: !this.state.isOpen });
        }
    }

    render(): React.ReactNode {
        return (
            <div className={styles.cartContainer}>
                <button className={styles.button} onClick={this.handleClick}>
                    <FiShoppingCart />
                    <span>购物车 2 （件）</span>
                </button>
                <div className={styles.cartDropDown}
                    style={{
                        display: this.state.isOpen ? "block" : "none"
                    }}
                >
                    <ul>
                        <li>robot 1</li>
                        <li>robot 2</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ShoppingCart;