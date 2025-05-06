import React from 'react'
import SettingsSidebar from './SettingsSidebar'
import SettingsContent from './SettingsContent'
import SettingsHeader from './SettingsHeader'

function SettingsLayout() {
  return (
    <div className='bg-white p-6 flex flex-col grow shadow'>
        <SettingsHeader />
        <div className='flex'>
            <SettingsSidebar />
        </div>
        
        
    </div>
  )
}

export default SettingsLayout