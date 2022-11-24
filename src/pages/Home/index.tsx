import { Select, Tabs } from 'antd'
import { Header } from '../../components'
import { Box } from './styles'

const { Option } = Select

export function Home() {
    const barData = {
        table: [
            { a: 'A', b: 28 },
            { a: 'B', b: 55 },
            { a: 'C', b: 43 },
            { a: 'D', b: 91 },
            { a: 'E', b: 81 },
            { a: 'F', b: 53 },
            { a: 'G', b: 19 },
            { a: 'H', b: 87 },
            { a: 'I', b: 52 },
        ],
    }
    return (
        <Box>
            <Header />
            <Select
                showSearch
                allowClear
                placeholder="Selecione um município"
            ></Select>
            <Select
                showSearch
                allowClear
                placeholder="Selecione uma ameaça"
            ></Select>
            <Select
                showSearch
                allowClear
                placeholder="Selecione um estágio de desenvolvimento"
            ></Select>

            <Tabs>
                <Tabs.TabPane tab="Condição" key="item-1">
                    Condição
                </Tabs.TabPane>
                <Tabs.TabPane tab="Estágio" key="item-2">
                    Estágio
                </Tabs.TabPane>
                <Tabs.TabPane tab="Ameaça" key="item-2">
                    Ameaça
                </Tabs.TabPane>
            </Tabs>
        </Box>
    )
}
