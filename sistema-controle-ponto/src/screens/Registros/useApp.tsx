import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function useApp() {
    const [loading, setLoading] = useState(false);
    const [dataRegisters, setDataRegisters] = useState([{}]);

    const data = [
        {
            "idFuncionario": "1",
            "nmFuncionario": "Alex Souza",
            "dsEmail": "alexsouza@gmail.com",
            "tpStatus": "Editado",
            "dtPonto": "2023-10-01 08:30"
        },
        {
            "idFuncionario": "2",
            "nmFuncionario": "Maria Silva",
            "dsEmail": "mariasilva@gmail.com",
            "tpStatus": "Confirmado",
            "dtPonto": "2023-10-01 09:00"
        },
        {
            "idFuncionario": "3",
            "nmFuncionario": "João Pereira",
            "dsEmail": "joaopereira@gmail.com",
            "tpStatus": "Rejeitado",
            "dtPonto": "2023-10-01 09:15"
        },
        {
            "idFuncionario": "4",
            "nmFuncionario": "Ana Costa",
            "dsEmail": "anacosta@gmail.com",
            "tpStatus": "Confirmado",
            "dtPonto": "2023-10-01 09:45"
        },
        {
            "idFuncionario": "5",
            "nmFuncionario": "Carlos Lima",
            "dsEmail": "carloslima@gmail.com",
            "tpStatus": "Editado",
            "dtPonto": "2023-10-01 10:00"
        }, {
            "idFuncionario": "1",
            "nmFuncionario": "Alex Souza",
            "dsEmail": "alexsouza@gmail.com",
            "tpStatus": "Editado",
            "dtPonto": "2023-10-01 08:30"
        },
        {
            "idFuncionario": "2",
            "nmFuncionario": "Maria Silva",
            "dsEmail": "mariasilva@gmail.com",
            "tpStatus": "Confirmado",
            "dtPonto": "2023-10-01 09:00"
        },
        {
            "idFuncionario": "3",
            "nmFuncionario": "João Pereira",
            "dsEmail": "joaopereira@gmail.com",
            "tpStatus": "Rejeitado",
            "dtPonto": "2023-10-01 09:15"
        },
        {
            "idFuncionario": "4",
            "nmFuncionario": "Ana Costa",
            "dsEmail": "anacosta@gmail.com",
            "tpStatus": "Confirmado",
            "dtPonto": "2023-10-01 09:45"
        },
        {
            "idFuncionario": "5",
            "nmFuncionario": "Carlos Lima",
            "dsEmail": "carloslima@gmail.com",
            "tpStatus": "Editado",
            "dtPonto": "2023-10-01 10:00"
        },
    ];

    const getDataRegisters = async () => {
        try {
            //const response = await fetch('http://localhost:3000/registers');
            //const data = await response.json();

            setDataRegisters(data);
            setLoading(false);
            //toast.success('Registros carregados com sucesso');
        } catch (error) {
            console.log(error);
            toast.error('Erro ao carregar os dados');
        }

    };

    useEffect(() => {
        getDataRegisters();
    }, []);

    return {
        dataRegisters,
        getDataRegisters
    };
}