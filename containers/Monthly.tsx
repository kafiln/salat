import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UseAppContext } from "context";
import { getCityName } from "data/cityService";
import { Loader2, Printer } from "lucide-react";
import { useRef } from "react";
import { useQuery } from "react-query";
import ReactToPrint from "react-to-print";
import { getMonthlyPrayers } from "services/api";

const dayIsFriday = (day: string) => day === "الجمعة";

const Monthly = () => {
  // Get data
  const [state] = UseAppContext();
  const { city } = state;

  // Get date from API
  const { data, isLoading } = useQuery(
    ["monthlyPrayers", city],
    () => getMonthlyPrayers(Number(city)),
    {
      enabled: Boolean(city),
    }
  );

  const componentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col h-full">
      {isLoading && (
        <div className="flex flex-1 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}
      {data && (
        <>
          <ReactToPrint
            trigger={() => (
              <Button
                variant="default"
                size="sm"
                className="absolute right-1/2 top-1 gap-2"
              >
                تحميل
                <Printer className="h-4 w-4" />
              </Button>
            )}
            content={() => componentRef.current}
          />
          <div ref={componentRef} className="max-w-4xl mx-auto">
            {city && (
              <Table dir="rtl" className="border border-border">
                <TableCaption className="caption-top text-base mb-4">
                  {`حصة الصلاة لشهر ${data[0].arabic_month} الخاصة بمدينة ${getCityName(city)}`}
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    {Object.values(data[0]).map(
                      (header: any, index: number) => {
                        return (
                          <TableHead
                            key={index}
                            className="bg-muted font-semibold text-foreground"
                          >
                            {header}
                          </TableHead>
                        );
                      }
                    )}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.slice(1).map((row: any, index: number) => {
                    return (
                      <TableRow
                        key={index}
                        className={
                          dayIsFriday(row.day_name) ? "bg-muted/50" : ""
                        }
                      >
                        {Object.values(row).map(
                          (cell: any, index: number) => {
                            return (
                              <TableCell key={index}>{cell}</TableCell>
                            );
                          }
                        )}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Monthly;
