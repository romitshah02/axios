import '../index.css'

export default function item ({item}){
    return(
        <div  clasname='item'>
        <img  src={item.src.large} alt="" />
        </div>
    )
}

