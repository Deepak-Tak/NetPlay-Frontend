


const Categories = ({ text, activeCategory }) => {


    return <div onClick={() => activeCategory.setActiveCategory(text)} className={`border px-2 hover:bg-[#1c13131a] cursor-pointer ${activeCategory.activeCategory === text ? " bg-[#1c13131a]" : "bg-[#0000000d] "} rounded-lg shrink-0 m-2`}>
        <div className=" text-base py-1 font-medium max-[500px]:text-sm text-gray-600 ">{text}</div>
    </div>


}
export default Categories;