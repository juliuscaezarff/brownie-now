import { RegularText } from '../../../../components/Typegraphy'
import { Button } from "../../../../components/Button";
import { ConfirmationSectionContainer } from './styles'
import { useCart } from '../../../../hooks/useCart';
import { formatMoney } from '../../../../utils/formateMoney';

const DELIVERY_PRICE = 3.9

export function ConfirmantionSection() {
  const { cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText>Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formattedCartTotal}
        </RegularText>
      </div>

      <Button 
        text="Confirmar Pedido"
        type="submit"
        disabled={cartQuantity <=0}
      />
    </ConfirmationSectionContainer>
  )
}
