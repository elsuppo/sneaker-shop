import Link from 'next/link'
import { BsCart2 } from 'react-icons/bs'

import { useAppSelector } from '@/hooks/hook'

import styles from './Header.module.scss'

const Header: React.FC = () => {
  const { sneakers } = useAppSelector(state => state.cart)

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link href='/'>
          <span>SP</span>.shop
        </Link>
      </div>
      <div className={styles.header__cart}>
        <BsCart2 size={24} />
        <div className={styles.header__cart_count}>
          <span>{sneakers.length}</span>
        </div>
      </div>
    </header>
  )
}

export default Header