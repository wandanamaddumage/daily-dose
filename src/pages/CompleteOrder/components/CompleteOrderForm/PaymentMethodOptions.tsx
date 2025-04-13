import { Bank, CreditCard, Money } from 'phosphor-react'
import { PaymentMethodInput } from '../PaymentMethodInput'
import { PaymentMethodOptionsContainer } from './styles'

import { useFormContext } from 'react-hook-form'
import { RegularText } from '../../../../components/Typography'

export const paymentMethods = {
  credit: {
    label: 'Credit Card',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Debit Card',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Cash',
    icon: <Money size={16} />,
  },
}

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as string

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register('paymentMethod')}
        />
      ))}
      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentMethodOptionsContainer>
  )
}
