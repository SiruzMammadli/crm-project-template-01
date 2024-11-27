'use client';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Label,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const data = [
    {
        month: 'Jan',
        income: 200,
        expense: 100,
    },
    {
        month: 'Feb',
        income: 1200,
        expense: 600,
    },
    {
        month: 'Mar',
        income: 400,
        expense: 700,
    },
    {
        month: 'Apr',
        income: 1000,
        expense: 300,
    },
    {
        month: 'May',
        income: 700,
        expense: 400,
    },
    {
        month: 'Jun',
        income: 2200,
        expense: 1200,
    },
    {
        month: 'Jul',
        income: 4100,
        expense: 800,
    },
    {
        month: 'Aug',
        income: 1400,
        expense: 1100,
    },
    {
        month: 'Sep',
        income: 1900,
        expense: 500,
    },
    {
        month: 'Oct',
        income: 900,
        expense: 1200,
    },
    {
        month: 'Nov',
        income: 1100,
        expense: 1000,
    },
    {
        month: 'Dec',
        income: 2000,
        expense: 100,
    },
];

export default () => {
    const formatter = Intl.NumberFormat('en', {notation: 'compact'});

    return (
        <div className="grid grid-cols-[3fr_2fr] gap-x-[16px]">
            <Card>
                <CardHeader>
                    <CardTitle>Income Statistics</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{left: -10, top: 10, right: 10, bottom: 10}}>
                            <CartesianGrid stroke="rgb(var(--slate-100))"/>
                            <YAxis
                                dataKey="income"
                                tickCount={8}
                                tickFormatter={(number) => `$${formatter.format(number)}`}/>
                            <XAxis dataKey="month"/>
                            <Line type="monotone" dataKey="income" stroke="rgb(var(--primary-800))"
                                  strokeWidth="2px"/>
                            <Line type="monotone" dataKey="expense" stroke="rgb(var(--primary-600))" strokeWidth="2px"/>
                            <Tooltip/>
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Employee Performance Ratings</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            data={data}
                            layout={"vertical"}
                        >
                            <XAxis type="number" tickCount={10}>
                                <Label/>
                            </XAxis>
                            <Bar dataKey="income" fill="rgb(var(--primary-800))" barSize={16} stackId={"a"}/>
                            <Bar dataKey="expense" fill="rgb(var(--primary-500))" barSize={16} stackId={"a"}/>
                        </ComposedChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    )
}