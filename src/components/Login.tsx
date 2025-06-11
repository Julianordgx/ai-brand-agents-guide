
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email === 'cliente566@brandpage.com' && password === 'c566') {
      onLogin();
    } else {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#2D3A2F' }}>
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">AI Brand Agents</h1>
          <p className="text-gray-600">Acesse o e-book exclusivo</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-gray-700">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg border-gray-300 focus:border-green-500 focus:ring-green-500"
              placeholder="Digite seu email"
              required
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-gray-700">Senha</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg border-gray-300 focus:border-green-500 focus:ring-green-500"
              placeholder="Digite sua senha"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <Button
            type="submit"
            className="w-full rounded-lg text-white font-medium py-3"
            style={{ backgroundColor: '#4CAF50' }}
          >
            Entrar
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Credenciais de teste:</p>
          <p>Email: cliente566@brandpage.com</p>
          <p>Senha: c566</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
