import { useState } from "react"

export default function Filter({selected = [], setSelected = () => {}}) {
  const options = ["Bug","Dark","Dragon","Electric","Fairy","Fighting","Fire","Flying","Ghost","Ice","Normal","Poison","Psychic","Rock","Steel","Water"]
  const [showModal, setShowModal] = useState(false)
  

  return(
    <div className="relative">
      <button 
        className='cursor-pointer bg-gray-200 px-2 py-1 rounded-lg hover:bg-gray-300' 
        onClick={()=>setShowModal(!showModal)}
      >
        Filters
      </button>
      <FilterModal visbility={showModal} options={options} CloseModal={()=>{setShowModal(false)}} selected={selected} setSelected={setSelected}/>
    </div>
  )
}

function FilterModal({visbility, options, CloseModal, selected = [], setSelected}) {
  return (<>
      <div 
        hidden={!visbility} 
        className="fixed z-[16] top-40 left-1/2 -translate-x-1/2 w-full max-w-2xl"
      >
        <div className='border-2 rounded-lg border-gray-200 grid grid-cols-4 gap-4 p-5 bg-white shadow-xl relative pt-8'>
          <h3 className="absolute top-1 right-2 cursor-pointer font-bold" onClick={()=>CloseModal()}>✕</h3>
          {options.map((item,idx)=>(
            <span 
              key={idx} 
              className={`flex flex-row items-center justify-between border-2 
                ${selected?.includes(item) ? 'border-red-400' : 'border-gray-200'} 
                bg-gray-100 rounded-lg px-2 py-1 hover:bg-gray-200`}
              onClick={()=>{
                if (selected.includes(item)) {
                  // remove item immutably
                  setSelected(selected.filter(s => s !== item))
                } else {
                  // add item immutably
                  setSelected([...selected, item])
                }
              }}
            >
              <p>{item}</p>
              <img 
                alt={item+" type icon"} 
                src={`/types/${item}.webp`} 
                width={28} 
                height={28}
              />
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
