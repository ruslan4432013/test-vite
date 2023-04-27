import {useEffect, useState} from 'react'
import {graphApi, GraphApi} from '@shared/api'
import {MdOutlineCalendarToday} from 'react-icons/md'
import {LineChart} from '@shared/ui/line-chart'
import Card from '@shared/ui/card'

import {useParams} from 'react-router-dom';
import {convertDataToGraph} from '../lib'

type RouteParams = {
    counter?: string
}
export const GraphPage = () => {

    const [graph, setGraph] = useState<GraphApi | null>(null)
    let {counter = 'all'} = useParams<RouteParams>();
    const getGraph = async (counterName: string) => {
        const data = await graphApi.getGraph( { counter: counterName })
        setGraph(data)
    }

    useEffect(() => {
        getGraph(counter).catch(console.error)
    }, [counter])

    if (!graph) {
        return <>Loading...</>
    }
    return (
        <div>
            <div className="mt-5 w-full h-96">
                <Card extra="!p-[20px] text-center h-full">
                    <div className="flex justify-between">
                        <button
                            className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
                            <MdOutlineCalendarToday/>
                            <span
                                className="text-sm font-medium text-gray-600">This month</span>
                        </button>
                    </div>

                    <div
                        className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap">
                        <div className="h-full w-full">
                            <LineChart data={convertDataToGraph(graph)}/>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

