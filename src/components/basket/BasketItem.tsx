import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { TfiClose } from 'react-icons/tfi'

import useCart from '@/hooks/useCart'
import { ISneakerDataSingle } from '@/interfaces/sneaker.interface'
import { formatPrice } from '@/services/formatPrice'

import styles from './Basket.module.scss'

const BasketItem: React.FC<ISneakerDataSingle> = ({
  sneaker
}) => {
  const router = useRouter()
  const {
    onDecOneItemFromCart,
    onIncOneItemInCard,
    onRemoveFromCard
  } = useCart()

  return (
    <div className={styles.basket__item}>
      <div
        className={styles.basket__item_image}
        onClick={() => router.push(`/sneaker/${sneaker.id}`)}
      >
        <Image src={sneaker.image} alt={sneaker.title} width={90} height={51} />
      </div>
      <div className={styles.basket__item_content}>
        <p className={styles.basket__item_title}>{sneaker.title}</p>
        <div className={styles.basket__item_counter}>
          <button onClick={() => onDecOneItemFromCart(sneaker)}>
            <AiOutlineMinusCircle size={22} color='#000000' />
          </button>
          <span>{sneaker.selectedItemsCount}</span>
          <button onClick={() => onIncOneItemInCard(sneaker)}>
            <AiOutlinePlusCircle size={22} color='#000000' />
          </button>
          <p>$ {formatPrice(sneaker.price)}</p>
        </div>
      </div>
      <div className={styles.basket__item_remove}>
        <button onClick={() => onRemoveFromCard(sneaker)}>
          <TfiClose size={22} color='#CFCFCF' />
        </button>
      </div>
    </div>
  )
}

export default BasketItem