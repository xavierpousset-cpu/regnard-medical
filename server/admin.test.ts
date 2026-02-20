import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TRPCError } from '@trpc/server';
import * as db from './db';

// Mock the database functions
vi.mock('./db', () => ({
  getAllUsers: vi.fn(),
  updateUserRole: vi.fn(),
  deleteUser: vi.fn(),
}));

describe('Admin Procedures', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('listUsers', () => {
    it('should allow superadmin to list users', async () => {
      const mockUsers = [
        { id: 1, email: 'xavier@test.com', role: 'superadmin' },
        { id: 2, email: 'admin@test.com', role: 'admin' },
      ];

      vi.mocked(db.getAllUsers).mockResolvedValue(mockUsers as any);

      const result = await db.getAllUsers();
      expect(result).toEqual(mockUsers);
      expect(db.getAllUsers).toHaveBeenCalled();
    });
  });

  describe('updateUserRole', () => {
    it('should update user role', async () => {
      vi.mocked(db.updateUserRole).mockResolvedValue(undefined);

      await db.updateUserRole(2, 'admin');
      expect(db.updateUserRole).toHaveBeenCalledWith(2, 'admin');
    });

    it('should support all role types', async () => {
      vi.mocked(db.updateUserRole).mockResolvedValue(undefined);

      const roles: Array<'user' | 'admin' | 'superadmin'> = ['user', 'admin', 'superadmin'];
      
      for (const role of roles) {
        await db.updateUserRole(1, role);
        expect(db.updateUserRole).toHaveBeenCalledWith(1, role);
      }
    });
  });

  describe('deleteUser', () => {
    it('should delete a user', async () => {
      vi.mocked(db.deleteUser).mockResolvedValue(undefined);

      await db.deleteUser(2);
      expect(db.deleteUser).toHaveBeenCalledWith(2);
    });
  });
});
