import React from 'react';
import { Statistic } from 'semantic-ui-react'

const ProfileTab = ({ name, clsname, activeTab, value, label, onTabClick}) => (
	<Statistic name={name} className={clsname + (activeTab === name ? " active" : "")} onClick={() => onTabClick(name)}>
      <Statistic.Value>{value}</Statistic.Value>
      <Statistic.Label>{label}</Statistic.Label>
    </Statistic>
)

export default ProfileTab;