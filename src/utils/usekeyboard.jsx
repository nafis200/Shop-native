import { useEffect, useState } from "react";
import { Keyboard } from "react-native";


export default function useKeyboardHeight(){

    const [height,setHeight] = useState(0) 

    useEffect(()=>{
        //  for android not ios
        const keyboradWillShow = Keyboard.addListener('keyboardDidShow', e =>{
           setHeight(e.endCoordinates.height)
        })

        const keyboradWillHide = Keyboard.addListener('keyboardDidHide', e =>{
           setHeight(0)
        })

        // for ios

        const keyboardWillShowios = Keyboard.addListener('keyboardWillShow', e=>{
            setHeight(e.endCoordinates.height)
        })

        const keyboardWillhideios = Keyboard.addListener('keyboardWillHide',e=>{
            setHeight(0)
        })
        
        return ()=>{
            keyboardWillShowios.remove()
            keyboradWillHide.remove()
            keyboradWillShow.remove()
            keyboardWillhideios.remove()
        }
    },[])
        return height
}