import { ReactNode } from 'react'
import { RegularText } from '../../../../components/Typography'
import { SectionTitleContainer } from './styles'

interface SectionTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <RegularText style={{ color: '#FFFFFF' }}>{title}</RegularText>
        <RegularText size="s" style={{ color: '#FFFFFF' }}>
          {subtitle}
        </RegularText>
      </div>
    </SectionTitleContainer>
  )
}
