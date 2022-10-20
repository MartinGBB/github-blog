import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function formatDate(date: string) {
  const newDate = new Date(date)

  const publishedDateFormatted = format(newDate, "dd 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(newDate, {
    locale: ptBR,
    addSuffix: true,
  })

  return { publishedDateFormatted, publishedDateRelativeToNow }
}
