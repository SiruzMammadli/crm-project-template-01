'use client'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Cell, Pie, PieChart, ResponsiveContainer} from "recharts";
import {cn} from "@/lib/utils";
import {CSSProperties} from "react";

const datas = [{name: "Active Jobs", value: 100}, {name: "In reviews Jobs", value: 50}, {
    name: "Finish Jobs",
    value: 30
}];

const COLORS = ["rgb(var(--primary-900))", "rgb(var(--primary-700))", "rgb(var(--primary-500))"];

export default () => {
    const totalJobsCount = datas.reduce((sum, data) => sum += data.value, 0);
    
    return (
        <div className="grid grid-cols-[repeat(3,minmax(350px,1fr))] gap-x-[16px]">
            <Card>
                <CardHeader>
                    <CardTitle>Jobs Overview</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between gap-x-[32px]">
                        <ResponsiveContainer width={160} height={80} className="relative">
                            <PieChart>
                                <Pie
                                    dataKey="value"
                                    data={datas}
                                    paddingAngle={1}
                                    startAngle={180}
                                    endAngle={0}
                                    innerRadius={72}
                                    outerRadius={80}
                                    cy={75}
                                    cornerRadius={1}
                                >
                                    {datas.map((data, key) => (
                                        <Cell key={key} fill={COLORS[key]}/>
                                    ))}
                                </Pie>
                            </PieChart>
                            <div
                                className="flex items-center flex-col gap-y-[4px] absolute bottom-0 left-1/2 -translate-x-1/2">
                                <p className="text-[24px] font-semibold">{totalJobsCount}</p>
                                <span className="text-[14px] text-secondary-500">Total Jobs</span>
                            </div>
                        </ResponsiveContainer>
                        <div className="grow flex flex-col justify-between">
                            {datas.map((data, key) => (
                                <div className="flex items-center justify-between" key={key}>
                                    <div className={cn(
                                        "relative font-semibold",
                                        "before:absolute before:bg-[--before-bg] before:top-1/2 before:-translate-y-1/2 before:-left-[10px] before:w-[4px] before:h-[12px] before:rounded-[2px]",
                                    )} style={{"--before-bg": COLORS[key]} as CSSProperties}>
                                        {data.value}
                                    </div>
                                    <p className="text-[14px] text-secondary-500">{data.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Jobs Overview</CardTitle>
                </CardHeader>
                <CardContent>
                    Coming soon...
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Jobs Overview</CardTitle>
                </CardHeader>
                <CardContent>
                    Coming soon...
                </CardContent>
            </Card>
        </div>
    )
}