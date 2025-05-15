let sourceTextValue = uiText.findByID(控件ID = "dataSource").getText()
let isDefaultSourceValue = uiSwitch.findByID(控件ID = "isDefault").getOn()
let isResetDefaultValue = uiSwitch.findByID(控件ID = "isResetDefault").getOn()

config.setConfig('/sdcard/config.ini', 'isUseDefault', JSON.stringify(isDefaultSourceValue))
config.setConfig('/sdcard/config.ini', 'sourceTextValue', JSON.stringify(sourceTextValue))

if(isResetDefaultValue) {
    config.setConfig('/sdcard/config.ini', 'isUseDefault', JSON.stringify(""))
    config.setConfig('/sdcard/config.ini', 'sourceTextValue', JSON.stringify(""))
}

logWindow.show()
print.log('配置成功，重新启动后生效')