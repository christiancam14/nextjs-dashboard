"use client";

import { Button } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Reveal from "./reveal";
import { useTranslations } from "next-intl";
import { IoSchool } from "react-icons/io5";

const timelineKeys = ["data1", "data2", "data3", "data4", "data5"];

export default function AccordionCourses() {
  const t = useTranslations("CertificationsPage");

  return (
    <>
      <Table aria-label="Table with courses">
        <TableHeader>
          <TableColumn>
            <span className="text-gray-800">
              <IoSchool className="icon-table mx-auto" />
            </span>
          </TableColumn>
          <TableColumn>
            <span className="text-gray-800 text-sm">{t("course")}</span>
          </TableColumn>
          <TableColumn>
            <span className="text-gray-800 text-sm">{t("date")}</span>
          </TableColumn>
        </TableHeader>
        <TableBody>
          {timelineKeys.map((key, index) => (
            <TableRow key={index}>
              <TableCell className="w-fit">
                <span className="text-gray-800 text-sm">
                  {t(`${key}.platform`)}
                </span>
              </TableCell>
              <TableCell>
                <span className="text-gray-800 text-sm">
                  {t(`${key}.course`)}
                </span>
              </TableCell>
              <TableCell className="w-fit">
                <span className="text-gray-800 text-sm">
                  {t(`${key}.date`)}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-center my-8 w-full">
        <Reveal>
          <a
            href="https://www.linkedin.com/in/christian-camacho-galvis/details/certifications/"
            className="w-fit mx-auto md:mx-0"
          >
            <Button className="rounded-md bg-slate-600 hover:bg-slate-800 mt-0 md:mt-2 text-white">
              {t("more_certifications")}
            </Button>
          </a>
        </Reveal>
      </div>
    </>
  );
}
