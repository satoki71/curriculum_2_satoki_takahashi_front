import React from 'react'
import { useState, useEffect } from "react";
import {userPost} from "./types/User"

export const [users, setUsers] = useState<userPost[]>([]);
