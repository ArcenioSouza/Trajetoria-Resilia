function hexStringToRGB(hexString) {
   let rgb = {
     r: 0,
     g: 0,
     b: 0
   }
   
   rgb.r = parseInt(hexString[1]+hexString[2], 16)
   rgb.g = parseInt(hexString[3]+hexString[4], 16)
   rgb.b = parseInt(hexString[5]+hexString[6], 16)
   
   return rgb
 }