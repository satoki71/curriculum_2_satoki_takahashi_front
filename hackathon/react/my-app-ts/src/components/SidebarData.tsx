import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
    {
        title: "ホーム",
        icon: <HomeIcon />,
        // マテリアルUI -> get start -> install -> npm -> SVG icon
        link: "/"
    },
    {
        title: "受け取り一覧",
        icon: <ArticleIcon />,
        link: "/take"
    },
    {
        title: "送信一覧",
        icon: <VolunteerActivismIcon /> ,
        link: "/give"
    },
    {
        title: "設定",
        icon: <SettingsIcon />,
        link: "/setting"
    }
]
