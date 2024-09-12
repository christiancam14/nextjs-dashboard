"use client";

import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import Reveal from "./reveal";
import { useTranslations } from "next-intl";

const rows = [
  {
    key: "1",
    platform: "Udemy",
    course: "Advanced Angular",
    date: "2024",
  },
  {
    key: "2",
    platform: "Udemy",
    course: "React Native: Native applications for IOS and Android",
    date: "2024",
  },
  {
    key: "3",
    platform: "Udemy",
    course: "React: From zero to expert (Hooks and MERN)",
    date: "2024",
  },
  {
    key: "4",
    platform: "Udemy",
    course: "Nest: Scalable backend development with Node",
    date: "2024",
  },
  {
    key: "5",
    platform: "Udemy",
    course: "Databases with MySQL + ChatGPT and MongoDB",
    date: "2024",
  },
];

const columns = [
  {
    key: "platform",
    label: "Platform",
  },
  {
    key: "course",
    label: "Course Name",
  },
  {
    key: "date",
    label: "Date",
  },
];

export default function AccordionCourses() {
  const t = useTranslations("CertificationsPage");

  return (
    <Accordion disabledKeys={["2"]}>
      <AccordionItem
        key="1"
        aria-label="Certifications"
        subtitle={<span className="text-sky-100">{t("subtitle")}</span>}
        title={<span className="text-sky-100">{t("title")}</span>}
        className="text-sky-100"
      >
        <Table aria-label="Table with courses">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>
                <span className="text-gray-800">{column.label}</span>
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell
                    className={
                      columnKey === "platform" || columnKey === "date"
                        ? "w-20"
                        : ""
                    }
                  >
                    <span className="text-gray-800">
                      {getKeyValue(item, columnKey)}
                    </span>
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="flex justify-center my-8 w-full">
          <Reveal>
            <a
              href="https://www.linkedin.com/in/christian-camacho-galvis/details/certifications/"
              className="w-fit mx-auto md:mx-0"
            >
              <Button className="rounded-md bg-slate-600 hover:bg-slate-800 mt-0 md:mt-2 text-white">
                More certifications
              </Button>
            </a>
          </Reveal>
        </div>
      </AccordionItem>
    </Accordion>
  );
}
