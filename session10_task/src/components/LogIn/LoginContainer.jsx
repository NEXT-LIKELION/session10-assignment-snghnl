import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function LoginContainer({ children }) {
    return (
        <Card
            variant="outlined"
            sx={{
                minWidth: 275,
                maxWidth: 400,
                margin: "auto",
                marginTop: 5,
                padding: 2,
            }}
        >
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                {children}
            </CardContent>
        </Card>
    );
}
