import React from 'react'

export type pointPost = {
    id: string;
    fromUserId: string;
    points: number;
    message: string;
    toUserId: string;
};

export type GiveEditOption = {
    id: string,
    fromUserId : string,
    name: string,
    points: number,
    message: string,
    toUserId: string
};


