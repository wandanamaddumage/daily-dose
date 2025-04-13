import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { ConfirmationSectionContainer } from './styles'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)
  const formattedCartTotal = formatMoney(cartTotal)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s" style={{ color: '#FFFFFF' }}>
          Total items
        </RegularText>
        <RegularText size="s" style={{ color: '#FFFFFF' }}>
          R$ {formattedItemsTotal}
        </RegularText>
      </div>
      <div>
        <RegularText size="s" style={{ color: '#FFFFFF' }}>
          Delivery Fee
        </RegularText>
        <RegularText size="s" style={{ color: '#FFFFFF' }}>
          R$ {formattedDeliveryPrice}
        </RegularText>
      </div>
      <div>
        <RegularText weight="700" size="l" style={{ color: '#FFFFFF' }}>
          Total
        </RegularText>
        <RegularText weight="700" size="l" style={{ color: '#FFFFFF' }}>
          R$ {formattedCartTotal}
        </RegularText>
      </div>

      <Button text="Confirm Order" disabled={cartQuantity <= 0} type="submit" />
    </ConfirmationSectionContainer>
  )
}
