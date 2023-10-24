import { Scheduler } from "@aldabil/react-scheduler";
 function BookingSchedule() {
  return (
    <Scheduler
        view=""
      deletable={true}
      hourFormat="24"
      fields={[
        {
            name: "email",
            type: "input",
            default: "",
            config: { label: "E-mail", multiline: false, rows: 1, required: true }
          },
        {
          name: "Description",
          type: "input",
          default: "Workshop...",
          config: { label: "Detaljer", multiline: true, rows: 4 }
        }
        
      ]}
    />
  );
}
export default BookingSchedule;