import Table, { type PropsType } from '../Table';

import clsx from 'clsx';

const columns: PropsType['columns'] = [
  {
    key: 'num',
    label: '序号'
  },
  {
    key: 'desc',
    label: '描述'
  }
];

const datas = [
  {
    key: 1,
    num: <strong>①</strong>,
    desc: (
      <span>
        <strong>功能导航栏：</strong>
        提供了对所有主要功能模块的快速访问。
      </span>
    )
  },
  {
    key: 2,
    num: <strong>②</strong>,
    desc: (
      <>
        <div>
          <strong>资源规格：</strong>
          查看和管理平台提供的 GPU、CPU 和内存等资源的详细规格。
        </div>
        <div>
          <strong>已订购资源：</strong>
          允许您跟踪和管理您已经购买或订阅的所有资源，包括它们的使用情况和状态。
        </div>
        <div>
          <strong>资源使用：</strong>
          查看目前资源的使用情况。
        </div>
        <div>
          <strong>智算任务：</strong>
          提供了对训练、推理和工作负载任务的创建、监控和管理功能。
        </div>
        <div>
          <strong>工作负载：</strong>
          部署和管理不同类型的服务组件，确保服务的高可用性和稳定性。
        </div>
      </>
    )
  },
  {
    key: 3,
    num: <strong>③</strong>,
    desc: '查看并管理您的个人信息。'
  }
]

export const QuicklyStart: React.FC<{
  className?: string;
}> = ({ className }) => {

  return (
    <div className={clsx(className, 'mt-4')}>
      <Table columns={columns} datas={datas} />
    </div>
  )
}
