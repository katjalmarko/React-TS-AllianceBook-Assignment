import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { PersonInfo, Character } from '../types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-center mb-4">
        <img
          src="../public/images/Starwars.png"
          alt="logo"
          className="h-24 w-auto"
        />
      </div>
    </div>
  );
};

export default Header;
