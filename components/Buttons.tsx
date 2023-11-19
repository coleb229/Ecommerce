import { Button } from "@/components/ui/button"

export const SubmitButton = ({ label }:any) => {
  return (
    <>
      {label ? (
        <Button type="submit" className="submitButton">
          {label}
        </Button>
      ) : (
        <Button type="submit" className="submitButton">
          Submit
        </Button>
      )}
    </>
  )
}