"use client";

import Title from "../items/Title";
import ItemSkill from "../items/ItemSkill";

export default function Skill() {
  return (
    <div className="p-5 py-20 max-w-5xl mx-auto">
      <div className="text-yellow-500 text-center">
        <Title>
          <span className="text-yellow-500">Skills</span>
        </Title>
      </div>
      <div className="mt-5 flex gap-2 flex-wrap justify-center max-w-3xl mx-auto">
        <ItemSkill image="html.png" text="HTML" />
        <ItemSkill image="css.png" text="CSS" />
        <ItemSkill image="js.png" text="JavaScript" />
        <ItemSkill image="tailwind.png" text="Tailwind" />
        <ItemSkill image="bootstrap.png" text="Bootstrap" />
        <ItemSkill image="react.png" text="React JS" />
        <ItemSkill image="next.svg" text="Next JS" />
        <ItemSkill image="php.png" text="PHP" />
        <ItemSkill image="laravel.png" text="Laravel" />
        <ItemSkill image="node.png" text="Node JS" />
        <ItemSkill image="express.png" text="Express JS" />
        <ItemSkill image="mysql.png" text="MySQL" />
        <ItemSkill image="postgre.png" text="Postgre SQL" />
        <ItemSkill image="mongo.svg" text="MongoDB" />
      </div>
    </div>
  );
}
