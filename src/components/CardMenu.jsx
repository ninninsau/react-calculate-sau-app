

export default function CardMenu({showTitle, showPic, showDetail}) {
  return (
    <div className='border border-gray-200 p-5 rounded-2xl w-85 shadow-xl
                    flex flex-col items-center gap-3'>
        {/* แสดงรูป */}
        <img src={showPic} alt="รูปคำนวณ" className='w-30' />

        {/* แสดงชื่อการคำนวณ */}
        <p className='font-kanit font-bold text-xl text-red-500'>
            {showTitle}
        </p>

        {/* แสดงคำอธิบาย */}
        <p className='font-charm text-sm'>
            {showDetail}
        </p>
    </div>
  )
}
