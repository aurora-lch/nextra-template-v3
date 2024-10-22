import { Card, CardFooter } from '@nextui-org/card';
import { Image } from '@nextui-org/image';

interface CardItem {
  cover: string;
  label: string;
  href: string;
}

const basePath = '/help/docs';

const cardItems: CardItem[] = [
  {
    cover: basePath + '/paas.png',
    label: '通算平台',
    href: basePath + '/paas/quickly-start'
  },
  {
    cover: basePath + '/gpu.png',
    label: '智算平台',
    href: '#'
  }
]

export default function IndexCards() {
  return (
    <div className='docs-card'>
      {cardItems.map(i => (
        <a className='group' href={i.href} key={i.href}>
          <Card isFooterBlurred className='border-none' radius='lg'>
            <Image className='object-cover group-hover:scale-125' src={i.cover} isZoomed alt='card-cover' />
            <CardFooter className='absolute text-white/80 bottom-1 z-10 shadow-small before:bg-white/10 border-1 overflow-hidden py-1 border-white/20 before:rounded-xl w-[calc(100%_-_8px)] ml-1 rounded-large'>
              <h3 className='py-1 mr-1'>{i.label}</h3>
              <span className='text-lg group-hover:translate-x-1 transition-transform'>→</span>
            </CardFooter>
          </Card>
        </a>
      ))}
    </div>
  )
}
