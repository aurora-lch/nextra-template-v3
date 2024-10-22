import Table from '~/Table'

const columns = [
  {
    key: 'name',
    label: '配置项'
  },
  {
    key: 'desc',
    label: '描述'
  }
];
const datas = [
  {
    key: 1,
    name: '名称',
    desc: '必填，DaemonSet 的名称'
  },
  {
    key: 2,
    name: '实例数量',
    desc: '必填，DaemonSet 的实例数量'
  },
  {
    key: 3,
    name: '是否开启服务网格',
    desc: '默认关闭，如需要服务网格能力请开启'
  },
  {
    key: 4,
    name: '升级策略',
    desc: (
      <>
        <div>
          <strong>RollingUpdate（滚动更新）：</strong>
          DaemonSet 的默认更新策略，它确保在更新过程中，总会有一定数量的 Pod 副本在运行，从而保证服务的连续性和可用性。最大不可用为升级过程中可能不可用的 Pod 的最大数量。
        </div>
        <div>
          <strong>OnDelete（仅在删除时更新）：</strong>
          OnDelete 更新策略意味着 DaemonSet 不会自动更新其管理的 Pod，除非显式删除旧的 Pod
        </div>
      </>
    )
  }
]

export const BaseInfo: React.FC = () => {

  return (
    <Table columns={columns} datas={datas} />
  )
}
