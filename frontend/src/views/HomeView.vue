<template>
  <div class="auth-wrapper">
    <div class="auth-card">
      
      <!-- Brand & Header -->
      <div class="auth-header">
        <div class="brand-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>The Clean Club</span>
        </div>
        <h2>Admin Console</h2>
        <p>Sign in to manage detailing bays and station operations</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="auth-form">
        
        <!-- Field 1: Identifier -->
        <div class="form-group">
          <label>Email or Mobile</label>
          <input
            v-model.trim="formData.identifier"
            type="text"
            placeholder="e.g. 9876543210 or admin@cleanclub.in"
            required
          />
        </div>

        <!-- Field 2: Password -->
        <div class="form-group">
          <div class="label-row">
            <label>Password</label>
            <a href="#" class="forgot-link">Forgot?</a>
          </div>
          <div class="password-wrapper">
            <input
              v-model="formData.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="toggle-btn"
            >
              {{ showPassword ? 'Hide' : 'Show' }}
            </button>
          </div>
        </div>

        <!-- Field 3: Station Role -->
        <!-- <div class="form-group">
          <label>Station Access Role</label>
          <select v-model="formData.role">
            <option value="owner_admin">Owner / Master Admin</option>
            <option value="manager">Bay Manager / Supervisor</option>
          </select>
        </div> -->

        <!-- Remember Me -->
        <div class="checkbox-row">
          <label class="checkbox-label">
            <input type="checkbox" v-model="formData.rememberMe" />
            <span>Remember this device</span>
          </label>
        </div>

        <!-- Submit Button -->
        <button type="submit" :disabled="loading" class="submit-btn">
          {{ loading ? 'Authenticating...' : 'Sign In to Station' }}
        </button>

      </form>

      <!-- Footer Note -->
      <div class="auth-footer">
        Detailing Hub Station • Internal Terminal
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const showPassword = ref(false)
const loading = ref(false)

const formData = reactive({
  identifier: '',
  password: '',
  role: 'owner_admin',
  rememberMe: false
})

const handleLogin = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    console.log('Login credentials:', formData)
  }, 700)
}
</script>

<style scoped>
.auth-wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f5f9;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  padding: 24px;
  box-sizing: border-box;
}

.auth-card {
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04);
  padding: 36px 32px;
  box-sizing: border-box;
}

.auth-header {
  margin-bottom: 26px;
}

.brand-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #0284c7;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 14px;
}

.brand-badge svg {
  width: 16px;
  height: 16px;
}

.auth-header h2 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.3px;
}

.auth-header p {
  margin: 6px 0 0 0;
  font-size: 13px;
  color: #64748b;
  line-height: 1.4;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 12px;
  font-weight: 600;
  color: #334155;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.forgot-link {
  font-size: 12px;
  color: #0284c7;
  text-decoration: none;
  font-weight: 500;
}

.forgot-link:hover {
  text-decoration: underline;
}

.form-group input,
.form-group select {
  width: 100%;
  height: 42px;
  padding: 0 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background-color: #f8fafc;
  color: #0f172a;
  font-size: 14px;
  box-sizing: border-box;
  outline: none;
  transition: all 0.15s ease;
}

.form-group input:focus,
.form-group select:focus {
  background-color: #ffffff;
  border-color: #0284c7;
  box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
}

.password-wrapper {
  position: relative;
  width: 100%;
}

.password-wrapper input {
  padding-right: 56px;
}

.toggle-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  cursor: pointer;
  padding: 4px 6px;
}

.toggle-btn:hover {
  color: #0f172a;
}

.checkbox-row {
  display: flex;
  align-items: center;
  margin-top: 2px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #475569;
  cursor: pointer;
  user-select: none;
}

.checkbox-label input {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.submit-btn {
  width: 100%;
  height: 44px;
  margin-top: 6px;
  background-color: #0f172a;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.submit-btn:hover {
  background-color: #1e293b;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.auth-footer {
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid #f1f5f9;
  text-align: center;
  font-size: 12px;
  color: #94a3b8;
}
</style>