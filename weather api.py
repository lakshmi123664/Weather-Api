from tkinter import *
import requests
root=Tk()
root.title("Weather Data")
rootconfig(bg="silver")
def getData(root):
    city=textField.get()
    api="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=aad2d131bee637762c0e16527ccdfe8f"
    _data=requests.get(api).json()
    temp=int(_data["main"]["temp"])-273.15
    
    info="temparature:"+str(temp)
    lable.config(text=info)

    

#aad2d131bee637762c0e16527ccdfe8f
#https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
#====================entry============
textField=Entry(root)
textField.pack()
textField.bind("<return>",getData)

lable=Label(root)
labble.pack()
root.mainloop()
