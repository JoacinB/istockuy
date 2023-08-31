import api from './api';

async function getGarantia(idGarantia) {
    const response = await api.get(`/garantias/${idGarantia}`);
    if (response.status === 404) {
        throw new Error('Garantía no encontrada');
    }
    return response.data;
}

export default {
    getGarantia,
};