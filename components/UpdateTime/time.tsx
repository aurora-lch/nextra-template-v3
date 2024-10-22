import dayjs from 'dayjs';

interface PropsType {
  date: Date
}

export default function Time({ date }: PropsType) {

  return (
    <span>最后更新时间：{dayjs(date).format()}</span>
  )
}
