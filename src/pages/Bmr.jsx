import bmr from "./../assets/bmr.png"
import { Link } from "react-router"

export default function Bmr() {
  return (
    <>
      <div className="w-[65%] border border-gray-200 shadow-xl mt-20 rounded-2xl
                      mx-auto flex flex-col items-center p-10">
        {/* แสดงชื่อการคำนวณภาษาไทย-อังกฤษ */}
        <div className="flex flex-col items-center gap-2 mb-5"> 
          <p className="font-kanit font-bold text-2xl">BMI Calculator</p>
          <p className="font-itim">คำนวณ BMI</p>
        </div>

        {/* แสดงรูป */}
        <div>
          <img src={bmr} alt="รูป" className="w-25" />
        </div>

        {/* แสดงส่วนของ form เพื่อให้ผู้ใช้ป้อนหรือเลือกหรือคลิก */}
        <div className="w-full">
          <form className="flex flex-col">
            <label className="font-kanit font-bold">ป้อนน้ำหนัก (กิโลกรม)</label>
            <input type="number" className="border border-gray-500 p-2 rounded-lg" />

            <label className="font-kanit font-bold mt-3">ป้อนส่วนสูง (เซ็นติเมตร)</label>
            <input type="number" className="border border-gray-500 p-2 rounded-lg" />

            <label className="font-kanit font-bold mt-3">ป้อนอายุ (ปี)</label>
            <input type="number" className="border border-gray-500 p-2 rounded-lg" />

            <label className="font-kanit font-bold mt-3">เลือกเพศ</label>
            <div><input type="radio" name="gender" checked/> ชาย</div>
            <div><input type="radio" name="gender" /> หญิง</div>

            <div className="flex mt-5 gap-5">
              <button className="bg-purple-800 text-white p-2 rounded-lg w-full 
                                   font-kanit cursor-pointer">
                คำนวณ
              </button>
              <button className="bg-red-500 text-white p-2 rounded-lg w-full 
                                   font-kanit  cursor-pointer">
                ยกเลิก
              </button>
            </div>
          </form>
        </div>

        {/* แสดงผลลัพธ์ */}
        <div className="w-full mt-5 flex gap-5 justify-center">
          <p className="font-kanit font-bold text-lg">
            ค่า BMR ที่คำนวณได้: 
          </p>
          <p className="font-kanit font-bold text-lg text-purple-800">
            0.00
          </p>
        </div>

        {/* แสดงลิงค์กลับไปหน้าหลัก */}
        <Link to="/" className="w-full mt-5 p-2 bg-gray-300 text-center 
                                rounded-lg font-kanit">
          กลับไปหน้าหลัก
        </Link>

      </div>
    </>
  )
}
