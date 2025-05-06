import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-manager',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  taskForm: FormGroup;
  tasks: Task[] = [];
  editingTask: Task | null = null;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });

    // Load tasks only if not already present
    if (this.tasks.length === 0) {
      this.taskService.getTasks();
    }
  }

  onSubmit(): void {
    if (this.taskForm.invalid) return;

    const task: Task = {
      id: this.editingTask?.id || 0,
      ...this.taskForm.value
    };

    if (this.editingTask) {
      this.taskService.updateTask(task).subscribe(() => {
        // Update the task list after editing
        this.tasks = this.tasks.map(t => t.id === task.id ? task : t);
        this.taskForm.reset();
        this.editingTask = null;
      });
    } else {
      this.taskService.addTask(task).subscribe((newTask) => {
        // Add the new task to the list
        this.tasks = [...this.tasks, newTask];
        this.taskForm.reset();
        alert('Task added successfully!');
      });
    }
  }

  onEdit(task: Task): void {
    this.taskForm.patchValue(task);
    this.editingTask = task;
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(id).subscribe(() => {
        // Remove the deleted task from the list
        this.tasks = this.tasks.filter(task => task.id !== id);
      });
    }
  }

  onCancel(): void {
    this.taskForm.reset();
    this.editingTask = null;
  }
}
