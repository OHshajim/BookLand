import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getStoredReadBook } from '../Utility/LocalStorage';
import { useEffect, useState } from 'react';
// eslint-disable-next-line react-hooks/rules-of-hooks
// const books = useLoaderData()
// for read

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const ReadChart = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('../../../../public/Books.JSON')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const storedReadBooks = getStoredReadBook()
    const displayReadBook = data.filter(book => storedReadBooks.includes(book.bookId))
    return (
       <div className='my-20 xl:mx-32 lg:mx-28 sm:mx-20  '> 
         <div className='  w-full   h-[300px] lg:h-[500px] bg-[#13131308] p-5 lg:p-14 rounded-3xl  '>
            <ResponsiveContainer>
            <BarChart 
                width={1 }
                height={400}
                data={displayReadBook}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {displayReadBook.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
            </ResponsiveContainer>
        </div>
       </div>
    );
};

export default ReadChart;