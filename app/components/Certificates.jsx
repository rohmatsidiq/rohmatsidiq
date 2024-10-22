"use client";

import { Card } from "antd";
import Title from "../items/Title";
import { TbCertificate } from "react-icons/tb";
import ItemCertificate from "./ItemCertificate";

export default function Certificates() {
  return (
    <div className="p-5 py-20 max-w-5xl mx-auto">
      <div className="text-yellow-500 text-center">
        <Title>
          <span className="text-yellow-500">Certificates</span>
        </Title>
      </div>
      <div className="mt-5 grid md:grid-cols-2 gap-5">
        <ItemCertificate
          logo="/dicoding.png"
          lembaga="Dicoding"
          title="Belajar Dasar Pemrograman Web"
          link="https://www.dicoding.com/certificates/EYX42GYOJZDL"
        />
        <ItemCertificate
          logo="/dicoding.png"
          lembaga="Dicoding"
          title="Belajar Dasar Pemrograman JavaScript"
          link="https://www.dicoding.com/certificates/6RPNDLQK8Z2M"
        />
        <ItemCertificate
          logo="/dicoding.png"
          lembaga="Dicoding"
          title="Belajar Membuat Front-End Web untuk Pemula"
          link="https://www.dicoding.com/certificates/JMZV18GQNXN9"
        />
        <ItemCertificate
          logo="/dicoding.png"
          lembaga="Dicoding"
          title="Belajar Membuat Aplikasi Web dengan React"
          link="https://www.dicoding.com/certificates/2VX36EE6VXYQ"
        />
        <ItemCertificate
          logo="/codepolitan.png"
          lembaga="Codepolitan"
          title="Belajar Dasar HTML"
          link="https://codepolitan.com/c/GKQEHBV"
        />
        <ItemCertificate
          logo="/codepolitan.png"
          lembaga="Codepolitan"
          title="Belajar Dasar CSS"
          link="https://codepolitan.com/c/OOUAFA6"
        />
        <ItemCertificate
          logo="/codepolitan.png"
          lembaga="Codepolitan"
          title="Belajar JavaScript"
          link="https://codepolitan.com/c/X2J4ABS"
        />
        <ItemCertificate
          logo="/codepolitan.png"
          lembaga="Codepolitan"
          title="Belajar Dasar Node.js dan NPM"
          link="https://codepolitan.com/c/ZLFR4W3"
        />
        <ItemCertificate
          logo="/codepolitan.png"
          lembaga="Codepolitan"
          title="Belajar Dasar Express.js"
          link="https://codepolitan.com/c/JMRLLFE"
        />
        <ItemCertificate
          logo="/codepolitan.png"
          lembaga="Codepolitan"
          title="Belajar RESTful dengan Express.js"
          link="https://codepolitan.com/c/IQSRGSB"
        />
      </div>
    </div>
  );
}
