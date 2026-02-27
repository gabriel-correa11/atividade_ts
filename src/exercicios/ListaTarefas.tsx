import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ListaTarefasProps, Tarefa } from './interfaces';

export default function ListaTarefas({ tarefas, onToggle }: ListaTarefasProps) {
    const [filtro, setFiltro] = useState<"todas" | "pendentes" | "concluidas">("todas");

    const tarefasFiltradas = tarefas.filter((tarefa: Tarefa) => {
        if (filtro === "pendentes") return !tarefa.concluida;
        if (filtro === "concluidas") return tarefa.concluida;
        return true;
    });

    return (
        <View style={styles.container}>
            <View style={styles.filtroBar}>
                <TouchableOpacity onPress={() => setFiltro("todas")}><Text>Todas</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => setFiltro("pendentes")}><Text>Pendentes</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => setFiltro("concluidas")}><Text>Concluídas</Text></TouchableOpacity>
            </View>

            {tarefasFiltradas.map((tarefa) => (
                <TouchableOpacity
                    key={tarefa.id}
                    onPress={() => onToggle(tarefa.id)}
                    style={styles.card}
                >
                    <Text style={[styles.text, tarefa.concluida && styles.completed]}>
                        {tarefa.titulo}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 10 },
    filtroBar: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15 },
    card: { padding: 15, backgroundColor: '#eee', marginBottom: 5 },
    text: { fontSize: 16 },
    completed: { textDecorationLine: 'line-through', color: 'gray' }
});