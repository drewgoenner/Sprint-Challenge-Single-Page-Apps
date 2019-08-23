import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import CharacterList from "./CharacterList";
import WelcomePage from "./WelcomePage";
import LocationsList from "./LocationsList";
import EpisodesList from "./EpisodesList";

export default function TabNav(){
    return (
    <Menu>
        <Menu.Item name = 'Home' as={NavLink} to='/' active={WelcomePage}>
            <Icon name= 'home' />
            <div>Home Page</div>
        </Menu.Item>
        <Menu.Item name = 'character' as={NavLink} to='/character' active={CharacterList}>
            <Icon name= 'users' />
            <div>Characters</div>
        </Menu.Item>
        <Menu.Item name = 'location' as={NavLink} to='/location' active={LocationsList}>
            <Icon name = 'map' />
            <div>Locations</div>
        </Menu.Item>
        <Menu.Item name = 'episode' as={NavLink} to='/episode' active={EpisodesList}>
            <Icon name = 'video camera' />
            <div>Episodes</div>
        </Menu.Item>
    </Menu>

    )
}

