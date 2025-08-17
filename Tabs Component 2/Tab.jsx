import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Settings from './Settings';
import Profile from './profile';
import Messages from './Messages';

const TabsData = [
  {
    id: 1,
    question: "Profile",
    answer: <Profile />
  },
  {
    id: 2,
    question: "Settings",
    answer: <Settings />
  },
  {
    id: 3,
    question: "Messages",
    answer: <Messages />
  },
];
const Tab = () => {

  const [ActiveId, SetActiveID] = useState(1);

  return (
    <div className='flex items-center justify-center'>
      <div className='w-[700px] border rounded-md m-3 p-2 bg-gray-100 flex flex-col'>
        <h3 className='font-serif flex items-center justify-center'>Tabs Component</h3>
        <div className='flex gap-2' >
          {
            TabsData.map((item) => (
              <div key={item.id} className={` ${item.id === ActiveId ? "bg-gray-400 text-white" : ""} cursor-pointer border shadow-md shadow-blue-200 !border-b-0 p-1 rounded-tl-xl rounded-tr-xl select-none font-semibold`} onClick={() => SetActiveID(item.id)}>{item.question}</div>
            ))
          }
        </div>
        <AnimatePresence mode={"wait"}>
          <motion.div className='select-none border shadow-md shadow-blue-200 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl'
            key={ActiveId}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {TabsData.find((item) => item.id === ActiveId)?.answer || "Content is not found"}
          </motion.div>
        </AnimatePresence>
      </div >
    </div >
  )
}

export default Tab